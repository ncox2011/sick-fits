const Mutations = {
    async createItem(parent, args, ctx, info) {
        //TODO check if logged in

        const item = await ctx.db.mutation.createItem({
            data: {
                ...args
            }
        }, info)
        return item;
    }
    // createDog(parent, args, ctx, info) {
    //     //Create a dog!
    //     console.log(args);
    // }
};

module.exports = Mutations;
