import CommentShow from "@/components/comments/comment-show";
import type {CommentsWithAuthor} from "@/database/queries/comments";
import {notFound} from "next/navigation";

interface CommentListProps {
  fetchData: () => Promise<CommentsWithAuthor[]>
}

export default async function CommentList({fetchData}: CommentListProps) {

  const comments = await fetchData();
  if(!comments) return notFound()

  const topLevelComments = comments.filter(
    (comment) => comment.parentId === null
  );
  const renderedComments = topLevelComments.map((comment) => {
    return (
      <CommentShow
        key={comment.id}
        commentId={comment.id}
        comments={comments}
      />
    );
  });

  return (
    <div className="space-y-3">
      <h1 className="text-lg font-bold">All {comments.length} comments</h1>
      {renderedComments}
    </div>
  );
}
