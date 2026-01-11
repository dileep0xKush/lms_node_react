type Props = {
  name?: string;
  size?: number; // px
};

export default function AvatarInitial({ name = '', size = 50 }: Props) {
  const letter = name.trim().charAt(0).toUpperCase() || '?';

  return (
    <div
      className="
        flex items-center justify-center
        rounded-full
        bg-indigo-100 text-indigo-700
        font-semibold
        shrink-0
      "
      style={{
        width: size,
        height: size,
        fontSize: size * 0.45,
      }}
    >
      {letter}
    </div>
  );
}
