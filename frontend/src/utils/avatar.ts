export const getAvatarURL = (name: string, gender?: string) => {
  const seed = encodeURIComponent(name);

  if (gender === "MALE") {
    return `https://api.dicebear.com/7.x/adventurer/svg?seed=${seed}&backgroundColor=b6e3f4`;
  }

  if (gender === "FEMALE") {
    return `https://api.dicebear.com/7.x/fun-emoji/svg?seed=${seed}&backgroundColor=ffd5dc`;
  }

  return `https://api.dicebear.com/7.x/thumbs/svg?seed=${seed}&backgroundColor=e0f2fe`;
};
