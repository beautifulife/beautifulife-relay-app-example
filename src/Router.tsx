import { Navigator, Screen } from 'karrotframe'

import _Page from './pages/_Page'
import MainPage from './pages/MainPage'
import NewTodoPage from './pages/NewTodoPage'
import TicketPage from './pages/TicketPage'
import TodoEditPage from './pages/TodoEditPage'
import TodoPage from './pages/TodoPage'

const Router: React.FC = () => {
  return (
    <Navigator>
      <Screen path="/" component={MainPage} />
      <Screen path="/new" component={NewTodoPage} />
      <Screen path="/todo/:id" component={TodoPage} />
      <Screen path="/todo/:id/edit" component={TodoEditPage} />
      <Screen path="/ticket/:id" component={TicketPage} />
      <Screen path="/with-us" component={_Page} />
    </Navigator>
  )
}

export default Router
