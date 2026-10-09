export declare function LoginGate({ title, onSubmit, error, busy, }: {
    title: string;
    onSubmit: (password: string) => void;
    error?: string | null;
    busy?: boolean;
}): import("react").JSX.Element;
