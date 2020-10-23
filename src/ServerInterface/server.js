import entries from './entries';
let getEntries = () => {
    // We Will connect to backend later
    return entries;
}

let server = {
    fetchEntries : getEntries
};

export default server;