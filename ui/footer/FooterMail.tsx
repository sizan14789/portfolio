"use client";

import { mail } from "@/data/sizan.json";

import { ClipboardCheck, Copy } from "lucide-react";
import { useState } from "react";

export default function FooterMail() {
  const [copied, setCopied] = useState<boolean>(false);

  const handleEmailCopy = async () => {
    await navigator.clipboard.writeText(mail);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="txt flex gap-2 items-center font-mono">
      <h3>{mail}</h3>
      <button title="Copy Email" onClick={handleEmailCopy}>
        {copied ? (
          <ClipboardCheck
            size={14}
            className="cursor-pointer hover:scale-110 hover:text-(--foreground) duration-150 mb-px"
          />
        ) : (
          <Copy
            size={14}
            className="cursor-pointer hover:scale-110 hover:text-(--foreground) duration-150 mb-px"
          />
        )}
      </button>
    </div>
  );
}
