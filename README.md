# run

- create

# redux 用法

useSelector 获取 store 的初始值

dispatch = useDispatch() // 获取改变 store 的初始值的方法

configureStore 讲 counterSlice 的值送进 store

createAsyncThunk 创建异步执行方法
createSlice 同步

counterSlice 文件里都是可以调用方法 `dispatch(incrementAsync(incrementValue)) dispatch(incrementIfOdd(incrementValue))`
