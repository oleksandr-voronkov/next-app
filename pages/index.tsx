import {fetchPosts} from "../src/api/posts.api";
import {PostCard} from "../src/components/PostCard";
import {Grid} from "@material-ui/core";
import {Link} from "../src/components/Link";
import {IPost} from "../src/definitions/interfaces";

function Home({ posts }: { posts: IPost[] }) {
    return (
        <div>
            <Grid container spacing={2}>
                {
                    posts && posts.length ?
                        posts.map((post, index) =>
                            <Grid key={index} item xs={3}>
                                <Link href={`/posts/${post.id}`} style={{textDecoration: 'none'}}>
                                    <PostCard data={post} />
                                </Link>
                            </Grid>
                        ) : null
                }
            </Grid>
        </div>
    )
}


export async function getStaticProps() {
    const response = await fetchPosts();

    return {
        props: {
            posts: response
        }
    }
}

export default Home;
