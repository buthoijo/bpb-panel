// New: Iterator.prototype methods are typed
const doubled = [1, 2, 3].values().map(x => x * 2);

// New: Map.groupBy is properly typed
const grouped = Map.groupBy(users, u => u.role);

// Before 5.9: ArrayBuffer had a fixed 'byteLength'
// After 5.9: ArrayBuffer may have 'maxByteLength' and 'resize()'

// globals.d.ts — override a specific lib type
interface ArrayBuffer {
    // Pin to the old definition temporarily
    readonly byteLength: number;
}
