"use client";

import { CldUploadWidget } from "next-cloudinary";

interface UploadButtonProps {
  onUpload: (url: string, publicId?: string) => void;
  label: string;
  hasFile: boolean;
  folder: string;
}

export default function UploadButton({
  onUpload,
  label,
  hasFile,
  folder,
}: UploadButtonProps) {
  return (
    <CldUploadWidget
      uploadPreset={process.env.NEXT_PUBLIC_UPLOAD_PRESET || "ml_default"}
      options={{
        folder: folder,
        clientAllowedFormats: ["png", "jpeg", "jpg", "pdf"],
      }}
      onSuccess={(result) => {
        if (
          result.event === "success" &&
          result.info &&
          typeof result.info === "object" &&
          "secure_url" in result.info &&
          "public_id" in result.info
        ) {
          onUpload(result.info.secure_url, result.info.public_id);
        }
      }}
    >
      {({ open }) => (
        <button
          type="button"
          onClick={() => open()}
          className={`w-full flex items-center justify-center gap-3 p-3 rounded-md border-2 transition-all ${
            hasFile
              ? "bg-green-50 border-green-300 text-green-700"
              : "bg-[#013249] border-[#2CFFFB] text-white hover:bg-[#014a6b]"
          }`}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            />
          </svg>
          <span className="font-family-poppins">
            {hasFile ? `✓ ${label} Uploaded` : `Upload ${label}`}
          </span>
        </button>
      )}
    </CldUploadWidget>
  );
}
