import Game from "../../../models/game";

export default {
  Query: {
    game: async (_: any, { id }: any) => await Game.findById(id),
  },
  Mutation: {
    createGame: async (_: any, { data }: any) => await Game.create(data),
    updateGame: async (_: any, { id, data }: any) =>
      await Game.findOneAndUpdate(id, data, { new: true }),
    deleteGame: async (_: any, { id }: any) =>
      !!(await Game.findOneAndDelete(id)),
  },
};
