import { getAuth, onAuthStateChanged, updatePassword } from 'firebase/auth';
import {
    collection,
    getDocs,
    addDoc,
    where,
    query,
    serverTimestamp,
    orderBy
} from 'firebase/firestore';
import { db } from '@/main.js';

export const actionTypes = {
    getPostsByUserId: '[firedb] getPostsByUserId',
    addPost: '[firedb] addPost',
    addComment: '[firedb] addComment', 
    updatePassword: '[auth] Update Password',
    getUserDetails: '[auth] Get User Details',
    fetchComments: '[firedb] fetchComments'
};

export const mutationType = {
    setPosts: '[firedb] setPosts',
    addPostSuccess: '[firedb] addPostSuccess',
    addCommentSuccess: '[firedb] addCommentSuccess', 
    addPostStart: '[firedb] addPostStart'
};

const state = {
    posts: undefined,
    isLoading: false
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
    }
};

const actions = {
    [actionTypes.getPostsByUserId] (context, { uid }) {
        context.commit(mutationType.addPostStart);
        const q = uid ? query(collection(db, 'posts'), where('uid', '==', uid), orderBy('created', 'desc')) : query(collection(db, 'posts'), orderBy('created', 'desc'));
        getDocs(q).then((result) => {
            const posts = result.docs.map((doc) => ({
                id: doc.id,
                data: doc.data()
            }));
            context.commit(mutationType.setPosts, posts);
        });
    },
    [actionTypes.addPost] (context, data) {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                addDoc(collection(db, 'posts'), {
                    data,
                    uid: user.uid,
                    created: serverTimestamp()
                }).then(() => {
                    context.commit(mutationType.addPostSuccess);
                });
            }
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
    [actionTypes.updatePassword] (context, { newPassword }) {
        const auth = getAuth();
        const user = auth.currentUser;
        if (user) {
            updatePassword(user, newPassword).then(() => {
                context.commit('Password updated successfully');
            }).catch((error) => {
                console.error('Error updating password:', error);
            });
        }
    },
    [actionTypes.getUserDetails] (context) {
        const auth = getAuth();
        const user = auth.currentUser;
        if (user) {
            const userDetails = {
                uid: user.uid,
                email: user.email,
                providers: user.providerData.map(provider => provider.providerId),
                created: user.metadata.creationTime,
                lastSignIn: user.metadata.lastSignInTime
            };
            context.commit('User details retrieved', userDetails);
        }
    }
};

export default {
    actions,
    mutations,
    state
};
