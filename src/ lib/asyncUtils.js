export const createPromiseThunk = (type, promiseCreate) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  return (param) => async (dispatch) => {
    // 요청 시작
    dispatch({ type, param });
    try {
      // 결과물의 이름을 payload 라는 이름으로 통일시킵니다.
      const payload = await promiseCreate(param);
      dispatch({ type: SUCCESS, payload });
    } catch (e) {
      dispatch({ type: ERROR, payload: e, error: true });
    }
  };
};

export const reducerUtils = {
  // 초기 상태.
  initial: (initialDate = null) => ({
    loading: false,
    data: initialDate,
    error: null,
  }),

  // 로딩중 상태.
  loading: (prevState = null) => ({
    loading: true,
    data: prevState,
    error: null,
  }),

  // 성공 상태
  success: (payload) => ({
    loading: false,
    data: payload,
    error: null,
  }),

  //실패 상태
  error: (error) => ({
    loading: false,
    datra: null,
    error: error,
  }),
};

// 비동기 관련 액션들을 처리하는 리듀서를 만들어줍니다.
export const handleAsyncActions = (type, key, keepData = false) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
  return (state, action) => {
    switch (action.type) {
      case type:
        return {
          ...state,
          [key]: reducerUtils.loading(keepData ? state[key].data : null),
        };
      case SUCCESS:
        return {
          ...state,
          [key]: reducerUtils.success(action.payload),
        };
      case ERROR:
        return {
          ...state,
          [key]: reducerUtils.error(action.payload),
        };
      default:
        return state;
    }
  };
};
