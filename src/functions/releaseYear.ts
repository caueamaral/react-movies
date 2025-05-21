export default function releaseYear(release_date: string) : string {
    const year = release_date.split('-')[0] || ''

    return year
}