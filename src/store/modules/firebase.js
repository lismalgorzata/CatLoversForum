import { getAuth, onAuthStateChanged, updatePassword } from 'firebase/auth'
import {
    collection,
    getDocs,
    // getDoc,
    doc,
    addDoc,
    where,
    query,
    deleteDoc,
    updateDoc,
    serverTimestamp,
    orderBy,
    increment
} from 'firebase/firestore'
import {db, storage} from '@/main.js'
import Vue from "core-js/internals/task";
import {ref} from "vue";
import {getDownloadURL} from "firebase/storage";

export const actionTypes = {
    getPostsByUserId: '[firedb] getPostsByUserId',
    addPost: '[firedb] addPost',
    addComment: '[firedb] addComment',
    updatePassword: '[auth] Update Password',
    getUserDetails: '[auth] Get User Details',
    fetchComments: '[firedb] fetchComments',
    fetchPosts: '[firedb] fetchPosts',
    getLikesForPosts: '[firedb] getLikesForPosts',
    incrementLikes: '[firedb] Increment Likes',
    decrementLikes: '[firedb] Decrement Likes',
    checkUserLike: '[firedb] Check User Like',
    addImage: '[firedb] addImage',
    loadImage: '[firedb] loadImage',

};

export const mutationType = {
    setPosts: '[firedb] setPosts',
    addPostSuccess: '[firedb] addPostSuccess',
    addCommentSuccess: '[firedb] addCommentSuccess',
    addPostStart: '[firedb] addPostStart',
    setLikes: '[firedb] setLikes',
    incrementLikesSuccess: '[firedb] Increment Likes Success'
};

const state = {
    posts: undefined,
    isLoading: false,
    likes: {}
};

const mutations = {
    [mutationType.setPosts] (state, payload) {
        state.posts = payload;
    },
    [mutationType.addPostSuccess] (state) {
        state.isLoading = false;
    },
    [mutationType.addCommentSuccess] (state) {
        state.isLoading = false;
    },
    setComments(state, comments) {
        state.comments = comments;
    },
    [mutationType.addPostStart] (state) {
        state.isLoading = true;
    },
    [mutationType.setLikes] (state, payload) {
        state.likes = payload;
    },
    [mutationType.incrementLikesSuccess] (state, { postId, newLikes }) {
        Vue.set(state.likes, postId, newLikes);
        console.log(`Likes for post ${postId} incremented successfully to ${newLikes}`);
    }
};

const actions = {
    [actionTypes.getPostsByUserId] (context, { uid }) {
        return new Promise((resolve) => {
            context.commit(mutationType.addPostStart)
            let q = query(collection(db, 'posts'), orderBy('created', 'desc'))
            if (uid) {
                q = query(
                    collection(db, 'posts'),
                    where('uid', '==', uid),
                    orderBy('created', 'desc')
                )
            }

            getDocs(q).then((result) => {
                const posts = result.docs.map((doc) => {
                    doc.data()
                    return {
                        id: doc.id,
                        data: doc.data()
                    }
                })
                context.commit(mutationType.setPosts, posts)
                resolve()
            })
        })
    },
    [ actionTypes.addPost ](context, data) {
        return new Promise((resolve, reject) => {
            const auth = getAuth();
            onAuthStateChanged(auth, async (user) => {
                // Ensure that the user is authenticated before proceeding
                if (!user) {
                    reject('No authenticated user found.');
                    return;
                }

                // Prepare the data to add to the database
                const postData = {
                    title: data.title,
                    content: data.content,
                    visibleForOthers: data.visibleForOthers,
                    uid: user.uid,
                    created: serverTimestamp(),
                };

                try {
                    // Add the new post data to the Firestore collection
                    const docRef = await addDoc(collection(db, 'posts'), postData);

                    // Create a response object that includes the new post ID and data
                    const addedPost = {
                        id: docRef.id,
                        ...postData,
                    };

                    // Commit that the post was added successfully
                    context.commit(mutationType.addPostSuccess);

                    // Resolve the promise with the newly created post object
                    resolve(addedPost);
                } catch (error) {
                    console.error("Error adding post:", error);
                    reject(error);
                }
            });
        });
    },
    [actionTypes.addComment] (context, { postId, comment }) {
        console.log("addCommentIsFiring");
        const commentRef = collection(db, "comments", postId, "userComments");
        const auth = getAuth();
        if (auth.currentUser) {
            addDoc(commentRef, {
                text: comment,
                created: serverTimestamp(),
                uid: auth.currentUser.uid
            }).then(() => {
                context.commit(mutationType.addCommentSuccess);
            }).catch(error => {
                console.error("Error adding comment:", error);
            });
        }
    },
    [actionTypes.fetchComments]: async (context, postId) => {
        console.log("fetchComments is firing for post ID:", postId);
        // Adjusted to fetch from the subcollection "userComments" under the specific post document
        const commentsRef = collection(db, "comments", postId, "userComments");
        const commentsQuery = query(commentsRef, orderBy("created", "desc")); // Optionally ordering by created timestamp
        try {
            const querySnapshot = await getDocs(commentsQuery);
            const comments = querySnapshot.docs.map(doc => ({ id: doc.id, data: doc.data() }));
            context.commit('setComments', comments);
            console.log("Comments fetched successfully", comments);
            return comments;
        } catch (error) {
            console.error("Error fetching comments:", error);
        }
    },
    [actionTypes.fetchPosts]: async (context) => {  // New fetchPosts action
        const postsQuery = query(collection(db, 'posts'), orderBy('created', 'desc'));
        try {
            const querySnapshot = await getDocs(postsQuery);
            const posts = querySnapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            }));
            context.commit(mutationType.setPosts, posts);
            console.log("Posts fetched successfully", posts);
            return posts;
        } catch (error) {
            console.error("Error fetching posts:", error);
        }
    },
    [actionTypes.updatePassword] (context, { newPassword }) {
        return new Promise((resolve, reject) => {
            const auth = getAuth()
            const user = auth.currentUser
            if (user) {
                updatePassword(user, newPassword)
                    .then(() => {
                        resolve('Password updated successfully')
                    })
                    .catch((error) => {
                        reject(error)
                    })
            } else {
                // eslint-disable-next-line prefer-promise-reject-errors
                reject('No authenticated user')
            }
        })
    },
    [actionTypes.getLikesForPosts] (context) {
        return new Promise((resolve) => {
            const q = query(collection(db, 'posts'), orderBy('created', 'desc'));

            getDocs(q).then((result) => {
                const likes = result.docs.map(doc => {
                    const data = doc.data();
                    return {
                        id: doc.id,
                        likes: data.likes || 0
                    };
                });
                context.commit(mutationType.setLikes, likes);
                resolve(likes);
            }).catch(error => {
                console.error("Error getting likes for posts:", error);
                resolve([]);
            });
        });
    },
    [actionTypes.incrementLikes] (context, { postId, userId }) {
        const postRef = doc(db, 'posts', postId);
        const userLikesRef = collection(db, 'userLikes');

        return new Promise((resolve, reject) => {
            updateDoc(postRef, {
                likes: increment(1)
            }).then(() => {
                console.log('Likes incremented successfully.');

                return addDoc(userLikesRef, {
                    postId: postId,
                    userId: userId,
                    date: new Date()
                });
            }).then(() => {
                console.log('User like added successfully.');
                resolve();
            }).catch(error => {
                console.error("Failed to increment likes or add user like:", error);
                reject(error);
            });
        });
    },
    [actionTypes.decrementLikes] (context, { postId, userId }) {
        const postRef = doc(db, 'posts', postId);
        const userLikesRef = collection(db, 'userLikes');
        const q = query(userLikesRef, where("postId", "==", postId), where("userId", "==", userId));

        return new Promise((resolve, reject) => {
            getDocs(q).then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    deleteDoc(doc.ref);
                });

                updateDoc(postRef, {
                    likes: increment(-1)
                }).then(() => {
                    console.log('Likes decremented successfully.');
                    resolve();
                }).catch(error => {
                    console.error("Failed to decrement likes:", error);
                    reject(error);
                });
            }).catch(error => {
                console.error("Failed to find user like document:", error);
                reject(error);
            });
        });
    },
    [actionTypes.checkUserLike] (context, { postId, userId }) {
        const likesRef = collection(db, 'userLikes');
        const q = query(likesRef, where("postId", "==", postId), where("userId", "==", userId));
        return getDocs(q).then(querySnapshot => {
            return querySnapshot.size > 0;
        }).catch(error => {
            console.error("Failed to check user likes:", error);
            return false;
        });
    },
    [actionTypes.addImage](context, { name, referenceId }) {
        return new Promise((resolve, reject) => {
            const imageDoc = {
                name,
                referenceId,
                created: serverTimestamp()
            };
            addDoc(collection(db, 'images'), imageDoc)
                .then((docRef) => {
                    console.log(`Photo added successfully. File name: "${name}"`);
                    resolve({ id: docRef.id, ...imageDoc });
                })
                .catch((error) => {
                    console.error("Error adding photo:", error);
                    reject(error);
                });
        });
    },
    [actionTypes.loadImage](context, { referenceId }) {
        // eslint-disable-next-line no-async-promise-executor
        return new Promise(async (resolve, reject) => {
            try {
                // Query the `images` collection where `referenceId` matches the given `postId`
                const q = query(collection(db, 'images'), where('referenceId', '==', referenceId));
                const querySnapshot = await getDocs(q);

                if (querySnapshot.empty) {
                    reject(`No image found for reference ID: ${referenceId}`);
                    return;
                }

                // Assume there's only one image for each post and get the first document
                const imageDoc = querySnapshot.docs[0].data();

                // Extract the image name to create the full path in storage
                const imagePath = `images/${imageDoc.name}`;

                // Retrieve the download URL from storage
                const storageRef = ref(storage, imagePath);
                const downloadUrl = await getDownloadURL(storageRef);

                // Resolve with the download URL
                resolve({ url: downloadUrl, ...imageDoc });
            } catch (error) {
                console.error("Error loading image:", error);
                reject(error);
            }
        });
    },
    [actionTypes.getUserDetails] () {
        return new Promise((resolve, reject) => {
            const auth = getAuth()
            const user = auth.currentUser

            if (user) {
                const userDetails = {
                    uid: user.uid,
                    email: user.email,
                    providers: user.providerData.map((provider) => provider.providerId),
                    created: user.metadata.creationTime,
                    lastSignIn: user.metadata.lastSignInTime
                }
                resolve(userDetails)
            } else {
                // eslint-disable-next-line prefer-promise-reject-errors
                reject('No authenticated user')
            }
        })
    }
};

export default {
    actions,
    mutations,
    state
};