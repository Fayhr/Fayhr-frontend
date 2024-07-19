import React, { useState } from "react";
import Comments from "./Comments";
import { BsBellFill } from "react-icons/bs";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { BsHeart } from "react-icons/bs";
import { BsSend } from "react-icons/bs";

interface CommentMsg {
  comment: string;
}

const Poll: React.FC = () => {
  const [comment, setComment] = useState<boolean>(false);
  const [commentMsg, setCommentMsg] = useState<CommentMsg>({ comment: "" });
  const [vote, setVote] = useState({ yes: false, no: false });
  const [yes, setYes] = useState(0);
  const [no, setNo] = useState(0);
  const pathname = usePathname();
  const showPoll = pathname === "/home-page/crowdfund-page";

  const handleComment = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommentMsg({ comment: e.target.value });
  };

  const handleVote = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    const target = e.target as HTMLSpanElement;
    if (target.dataset.value === "yes") {
      setYes(yes + 1);
      setVote({ yes: true, no: false });
    } else if (target.dataset.value === "no") {
      setNo(no + 1);
      setVote({ yes: false, no: true });
    }
  };

  return (
    <div className="h-full w-full px-5 pt-36 text-sm">
      <div className={`${showPoll ? "grid" : "hidden"} gap-2 mb-4`}>
        <Link href="/home-page/notifications">
          <BsBellFill className="text-primary text-4xl mb-2" />
        </Link>
        <p>
          We have lots of interesting crowdfunding projects, contribute to a
          project that best meets your need, thank you!
        </p>
      </div>
      <div className={`${showPoll ? "hidden" : "grid"} gap-2 text-sm`}>
        <Link href="/home-page/notifications">
          <BsBellFill className="text-primary text-4xl mb-2" />
        </Link>
        <div>
          <p>Should we open a crowdfund for a bag of rice?</p>
          <p>current price is 78k</p>
        </div>
        <div className="grid gap-1">
          <p className="flex gap-x-3 bg-white w-full h-10 rounded-t-lg items-center overflow-hidden">
            <span
              data-value="yes"
              onClick={handleVote}
              className="cursor-pointer select-none"
            >
              Yes:{" "}
            </span>
            {/* w-3/4 */}
            <span
              className={`bg-primary transition-all duration-300 ${
                yes === 0
                  ? "w-0"
                  : yes > 0 && yes <= 10
                  ? "w-[10%]"
                  : yes > 10 && yes <= 20
                  ? "w-[20%]"
                  : yes > 20 && yes <= 30
                  ? "w-[30%]"
                  : yes > 30 && yes <= 40
                  ? "w-[40%]"
                  : yes > 40 && yes <= 50
                  ? "w-[50%]"
                  : yes > 50 && yes <= 60
                  ? "w-[60%]"
                  : yes > 60 && yes <= 70
                  ? "w-[70%]"
                  : yes > 70 && yes <= 80
                  ? "W-[80%]"
                  : yes > 80 && yes <= 90
                  ? "W-[90%]"
                  : "W-[100%]"
              } h-10`}
            ></span>
          </p>
          <p className="flex gap-x-3 bg-white w-full h-10 rounded-b-lg items-center overflow-hidden">
            <span
              data-value="no"
              onClick={handleVote}
              className="cursor-pointer select-none"
            >
              No:{" "}
            </span>
            <span
              className={`bg-primary transition-all duration-300 ${
                no === 0
                  ? "w-0"
                  : no > 0 && no <= 10
                  ? "w-[10%]"
                  : no > 10 && no <= 20
                  ? "w-[20%]"
                  : no > 20 && no <= 30
                  ? "w-[30%]"
                  : no > 30 && no <= 40
                  ? "w-[40%]"
                  : no > 40 && no <= 50
                  ? "w-[50%]"
                  : no > 50 && no <= 60
                  ? "w-[60%]"
                  : no > 60 && no <= 70
                  ? "w-[70%]"
                  : no > 70 && no <= 80
                  ? "W-[80%]"
                  : no > 80 && no <= 90
                  ? "W-[90%]"
                  : "W-[100%]"
              } h-10`}
            ></span>
          </p>
        </div>
        <div className="flex items-center gap-2 *:flex *:items-center *:gap-1">
          <p>
            <BsHeart className="font-bold" />
            26
          </p>
          <p className="w-1 h-1 rounded-full bg-black"></p>
          <p>
            26<span onClick={() => setComment(!comment)}>comment</span>
          </p>
        </div>
        {comment && (
          <div className="w-full">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                console.log(commentMsg);
              }}
              className="flex items-center gap-2 w-full"
            >
              <input
                type="text"
                name="comment"
                id="comment"
                value={commentMsg.comment}
                onChange={handleComment}
                placeholder="write a comment..."
                className="w-full rounded-full p-1 px-3 outline-1 outline-primary border-2 border-primary"
              />
              <button type="submit" className="text-2xl">
                <BsSend />
              </button>
            </form>
          </div>
        )}
        <Comments />
      </div>
    </div>
  );
};

export default Poll;
