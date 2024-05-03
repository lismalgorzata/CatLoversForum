import { getAuth, onAuthStateChanged, updatePassword } from 'firebase/auth'
import {
    collection,
    getDocs,
    // getDoc,
    // doc,
    addDoc,
    where,
    query,
    // deleteDoc,
    // updateDoc,
    serverTimestamp,
    orderBy
    // orderBy,
} from 'firebase/firestore'
import { db } from '@/main.js'

export const actionTypes = {
    getPostsByUserId: '[firedb] getPostsByUserId',
    addPost: '[firedb] addPost',
    updatePassword: '[auth] Update Password',
    getUserDetails: '[auth] Get User Details'
}

export const mutationType = {
    setPosts: '[firedb] setPosts',
    addPostSuccess: '[firedb] addPostSuccess',
    addPostStart: '[firedb] addPostStart'
}

const state = {
    posts: undefined,
    isLoading: false
}
const mutations = {
    [mutationType.setPosts] (state, payload) {
        state.posts = payload
    },
    [mutationType.addPostSuccess] (state) {
        state.isLoading = false
    },

    [mutationType.addPostStart] (state) {
        state.isLoading = true
    }
}

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
    [actionTypes.addPost] (context, data) {
        return new Promise((resolve) => {
            const auth = getAuth()
            onAuthStateChanged(auth, (user) => {
                addDoc(collection(db, 'posts'), {
                    data,
                    uid: user.uid,
                    created: serverTimestamp()
                })
                context.commit(mutationType.addPostSuccess)
                resolve()
            })
        })
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
}
export default {
    actions,
    mutations,
    state
}
