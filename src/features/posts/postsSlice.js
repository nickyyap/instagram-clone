import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {
        id: 1,
        image: "https://picsum.photos/id/123/500/500",
        description: "Post 1 description",
        date: new Date().toISOString(),
        likes: 15,
        liked: false,
        comments: 5,
    },
    {
        id: 2,
        image: "https://picsum.photos/id/124/500/500",
        description: "Post 2 description",
        date: new Date().toISOString(),
        likes: 30,
        liked: false,
        comments: 10,
    },
];

const postsSlice = createSlice({
    name: "posts",
    initialState: initialState,
    reducers: {
        createPost: (state, action) => {
            const newPost = {
                id: Date.now(),
                image: action.payload.image,
                description: action.payload.description,
                date: new Date().toISOString(),
                likes: 0,
                comments: 0,
            };
            state.push(newPost);
        },
        updatePost: (state, action) => {
            const index = state.findIndex((post) => post.id === action.payload.id);
            state[index] = action.payload;
        },
        deletePost: (state, action) => {
            return state.filter((post) => post.id !== action.payload);
        },
        likePost: (state, action) => {
            const index = state.findIndex((post) => post.id === action.payload);
            if (index !== -1) {
                const post = state[index];
                if (post.liked) {
                    post.likes -= 1;
                    post.liked = false;
                } else {
                    post.likes += 1;
                    post.liked = true;
                }
            }
        },
    },
});

export const { createPost, updatePost, deletePost, likePost } = postsSlice.actions;

export default postsSlice.reducer;