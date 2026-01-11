export function display(value?: string | null) {
  return value?.trim() ? value : '-';
}
