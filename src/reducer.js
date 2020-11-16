export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token:
    "BQAX3yXvWJfSmhB1whTjCWIbL25SfoL4D04iip9QuQTXQqHmpukmuuXEAsyyBOtpK0IMrP8lkUeSbDpMm8nQjj8-oPzaDqIjcST-PNrqH0B3Qtv6st7gdEsRQw88ZZDnFo9TYqlp91R02QUQbI51lJzjNX4rZi1SMrml0Kz42qahXyNEMGQP"
};

const reducer = (state, action) => {
  console.log("action", action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token
      };
    default:
      return state;
  }
};

export default reducer;
