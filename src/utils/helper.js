const uuid = () => {
    let s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    //return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
    // return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    return s4() + s4() + '-' + s4();
};

export const MappedElement = ({ data, renderElement, count }) => {
    if (data && data.length) {
        return data.map((obj, index, array) => {
            if (count) {
                return (index <= count) ? renderElement(obj, index, array) : null
            } else {
                return renderElement(obj, index, array)
            }
        });
    }
    return null;
};
export {
    uuid
}
