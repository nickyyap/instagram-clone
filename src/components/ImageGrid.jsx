import { Row, Col, Image, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import UpdatePostModal from './UpdatePostModal';
import { deletePost, likePost } from '../features/posts/postsSlice';

export default function ImageGrid() {
    const posts = useSelector((state) => state.posts);
    const [show, setShow] = useState(false);
    const [currentPost, setCurrentPost] = useState(null);
    const dispatch = useDispatch();

    const handleClose = () => {
        setCurrentPost(null);
        setShow(false);
    };

    const handleShow = (post) => {
        setCurrentPost(post);
        setShow(true);
    };

    const handleDelete = (postId) => {
        if (window.confirm("Are you sure you want to delet this post?")) {
            dispatch(deletePost(postId));
        }
    };

    const handleLike = (postId) => {
        dispatch(likePost(postId));
    };

    // arrow function
    const renderImages = () => {
        return posts.map((post) => (
            <Col md={4} key={post.id} className="mb-4">
                <Image src={post.image} fluid />
                <Button onClick={() => handleLike(post.id)} variant={post.liked ? "danger" : "outline"}>
                    <i className="bi bi-heart"></i> {post.liked ? "Unlike" : "Like"}
                    <span className={`ms-1 ${post.liked ? "text-white" : "text-muted"}`}>{post.likes}</span>
                </Button>
                <Button onClick={() => handleShow(post)} className="ms-1" variant="outline-primary">
                    <i className="bi bi-pencil-square"></i>
                </Button>
                <Button onClick={() => handleDelete(post.id)} className="ms-1" variant="outline-danger">
                    <i className="bi bi-trash"></i>
                </Button>
            </Col>
        ));
    };

    return (
        <>
            <Row>{renderImages()}</Row>
            {currentPost && (
                <UpdatePostModal
                    show={show}
                    handleClose={handleClose}
                    postId={currentPost.id} />
            )}
        </>
    );
}