"use client";

import React from "react";
import Dropzone, { useDropzone } from "react-dropzone";

const FileDrop = () => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  console.log(acceptedFiles);

  return (
    <div className="h-20 rounded-lg border border-dashed">
      <section
        {...getRootProps()}
        className="flex h-full w-full cursor-pointer items-center justify-center"
      >
        <input {...getInputProps()} />
        <p>{acceptedFiles[0]?.name ?? "Drag PDF file"}</p>
      </section>
    </div>
  );
};

export default FileDrop;
