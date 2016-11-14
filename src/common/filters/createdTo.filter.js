export default function () {

    return function (items, createdTo) {

        if (!createdTo) {
            return items;
        }

        return items.filter((item) => {
            return Date.parse(item.Created) <= Date.parse(createdTo);
        });
    };
}
