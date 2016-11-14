export default function () {

    return function (items, createdFrom) {

        if (!createdFrom) {
            return items;
        }

        return items.filter((item) => {
            return Date.parse(item.Created) >= Date.parse(createdFrom);
        });
    };
}
