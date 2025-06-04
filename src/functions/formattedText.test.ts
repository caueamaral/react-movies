import formattedText from './formattedText'

test('extracts "lilo-&-stitch" from "Lilo & Stitch"', () => {
    expect(formattedText('Lilo & Stitch')).toEqual('lilo-&-stitch')
})