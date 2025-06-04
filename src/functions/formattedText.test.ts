import formattedText from './formattedText'

test('when passes Lilo & Stitch returns lilo-&-stitch', () => {
    expect(formattedText('Lilo & Stitch')).toEqual('lilo-&-stitch')
})