import {redirect} from "next/navigation";
import PostList from "@/components/posts/post-list";
import {fetchPostsUsingSearch} from "@/database/queries/posts";

interface SearchPageProps {
    searchParams: {
        term: string;
    }
}

export default async function SearchPage({searchParams: {term}}: SearchPageProps) {
    if (!term) return redirect('/');

    return <div className="max-w-6xl mx-auto">
            <PostList fetchData={() => fetchPostsUsingSearch(term)}/>
    </div>
}