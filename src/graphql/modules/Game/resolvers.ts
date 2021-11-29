import Game from "../../../models/game";
import { GET_GAME_DATA } from "./channels";

export default {
  Query: {
    game: async (_: any, { idRecruiter }: any) =>
      await Game.findOne({ idRecruiter: idRecruiter }),
  },
  Mutation: {
    createGame: async (_: any, { data }: any) => await Game.create(data),
    updateGame: async (_: any, { id, data }: any) => {
      const dataUpdated = await Game.findOneAndUpdate(id, data, { new: true });

      return dataUpdated;
    },
    deleteGame: async (_: any, { id }: any) =>
      !!(await Game.findOneAndDelete(id)),
  },
};
