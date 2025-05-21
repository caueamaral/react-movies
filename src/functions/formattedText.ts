export default function formattedText(text: string) : string {
    const newText = text
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/\s+/g, '-')
        .toLowerCase()

    return newText || ''
}