import React, { useEffect, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ChatIcon from "@mui/icons-material/Chat";
import CodeIcon from "@mui/icons-material/Code";

export default function LiveStats({ messageSentTrigger }) {
  const [pageViews, setPageViews] = useState(0);
  const [messagesSent, setMessagesSent] = useState(0);
  const [linesOfCode] = useState(125000);

  // Load initial data from localStorage
  useEffect(() => {
    const storedViews = parseInt(localStorage.getItem("pageViews") || "0");
    const storedMessages = parseInt(
      localStorage.getItem("messagesSent") || "0"
    );

    // Increment page views
    const newViews = storedViews + 1;
    setPageViews(newViews);
    setMessagesSent(storedMessages);

    localStorage.setItem("pageViews", newViews.toString());
    localStorage.setItem("messagesSent", storedMessages.toString());
  }, []);

  // Increment messages sent when trigger changes
  useEffect(() => {
    if (messageSentTrigger) {
      const storedMessages = parseInt(
        localStorage.getItem("messagesSent") || "0"
      );
      const newMessages = storedMessages + 1;
      setMessagesSent(newMessages);
      localStorage.setItem("messagesSent", newMessages.toString());
    }
  }, [messageSentTrigger]);

  return (
    <section id="livestats" className="max-w-6xl mx-auto px-4 py-16">
      <div className="rounded-2xl border border-white/10 p-5 bg-white/5 card-hover flex justify-between text-center">
        <div className="flex flex-col items-center gap-2 text-slate-400 dark:text-slate-300">
          <VisibilityIcon className="text-sky-500 animate-bounce" />
          <span className="font-semibold">{pageViews}</span>
          <span>Page Views</span>
        </div>

        <div className="flex flex-col items-center gap-2 text-slate-400 dark:text-slate-300">
          <ChatIcon className="text-green-500 animate-pulse" />
          <span className="font-semibold">{messagesSent}</span>
          <span>Messages Sent</span>
        </div>

        <div className="flex flex-col items-center gap-2 text-slate-400 dark:text-slate-300">
          <CodeIcon className="text-indigo-500 animate-spin-slow" />
          <span className="font-semibold">{linesOfCode.toLocaleString()}</span>
          <span>Lines of Code</span>
        </div>
      </div>
    </section>
  );
}
