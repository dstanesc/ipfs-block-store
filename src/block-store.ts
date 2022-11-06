
const blockStore = ({ cache, ipfs, pin = true, preload = true }: { cache?: any, ipfs: any, pin?: boolean, preload?: boolean }) => {

    const put = async (block: { cid: any, bytes: Uint8Array }): Promise<void> => {
        if (cache)
            cache[block.cid.toString()] = block.bytes
        const cid = await ipfs.block.put(block.bytes, { format: 'raw', mhtype: 'sha2-256', version: 1, pin, preload })
        if (cid.toString() !== block.cid.toString())
            throw new Error('Cid spec mismatch')
    }

    const get = async (cid: any): Promise<Uint8Array> => {
        let bytes
        if (cache)
            bytes = cache[cid.toString()]
        if (!bytes)
            bytes = await ipfs.block.get(cid)
        return bytes
    }

    return { get, put }
}

export { blockStore }