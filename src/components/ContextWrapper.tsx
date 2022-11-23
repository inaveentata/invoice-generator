import { createContext, useState } from "react";

interface File extends Blob {
  readonly lastModified?: number;
  /** @deprecated */
  readonly lastModifiedDate?: Date;
  readonly name?: string;
  readonly webkitRelativePath?: string;
}

type FileDetails = {
  path?: string;
  preview?: string;
  size?: number | undefined;
  type?: string;
};

type Files = File & FileDetails

type ContextWrapperProps = {
  children: React.ReactNode;
};

export const Context = createContext<Files[]>({} as Files[]);

/* const ContextWrapper = ({ children }: ContextWrapperProps) => {
  const [files, setFiles] = useState<Files[]>([]);

  return (
    <Context.Provider
      value={{
        files,
        setFiles,
      }}
    >
      {children}
    </Context.Provider>
  );
}; */

// export default ContextWrapper;
