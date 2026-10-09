export type SegmentedOption<T extends string> = {
    value: T;
    label: string;
    disabled?: boolean;
};
export declare function Segmented<T extends string>({ label, value, options, onChange, }: {
    label: string;
    value: T;
    options: SegmentedOption<T>[];
    onChange: (value: T) => void;
}): import("react").JSX.Element;
