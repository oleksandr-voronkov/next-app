import Head from "next/head";
import {useRouter} from "next/router";
import {fetchPost} from "../../src/api/posts.api";
import {Box, Typography} from "@material-ui/core";
import { Link } from '../../src/components/Link';
import {IPost} from "../../src/definitions/interfaces";

function SinglePost({ post }: {post: IPost}) {
    const router = useRouter();

    if (router.isFallback)  return <div>Loading...</div>;

    return post ? <div>
        <Head>
            <title>Hello</title>
        </Head>
        <div>
            <Typography variant={'h2'}>
                {post.title}
            </Typography>

            <Box m={2} />

            <Typography>
                {post.body}
            </Typography>

            <Box m={2} />

            <Link href={'/'}>
                Back
            </Link>
        </div>
    </div> : <></>;
}

export async function getStaticPaths() {
    return {
        paths: [{ params: { id: 'id' } }],
        fallback: true,
    };
}

export async function getStaticProps({ params }: any) {
    const post = await fetchPost(params.id);
    return {
        props: { post },
    }
}



export default SinglePost
