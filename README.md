
# redux 用法

useSelector 获取store的初始值

dispatch = useDispatch() // 获取改变store的初始值的方法


configureStore 讲counterSlice的值送进store

createAsyncThunk 创建异步执行方法
createSlice 同步


counterSlice文件里都是可以调用方法 `dispatch(incrementAsync(incrementValue))   dispatch(incrementIfOdd(incrementValue))`