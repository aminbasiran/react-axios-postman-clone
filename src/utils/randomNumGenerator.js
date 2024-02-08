export function generateUniqueId() {
    return 'id-' + Math.random().toString(36).substring(2, 16);
}