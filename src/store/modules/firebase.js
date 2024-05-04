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
    addComment: '[firedb] addComment', // New action type for adding comments
    updatePassword: '[auth] Update Password',
    getUserDetails: '[auth] Get User Details'
};

export const mutationType = {
    setPosts: '[firedb] setPosts',
    addPostSuccess: '[firedb] addPostSuccess',
    addCommentSuccess: '[firedb] addCommentSuccess', // New mutation for successful comment addition
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
    [mutationType.addCommentSuccess] (state) { // Handles the state change on comment addition
        state.isLoading = false; // You can modify this as needed
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
    [actionTypes.addComment] (context, { postId, comment }) { // New action to add a comment
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
