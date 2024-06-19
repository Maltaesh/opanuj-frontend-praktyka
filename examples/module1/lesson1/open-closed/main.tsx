import ReactDOM from 'react-dom/client';
import { UsersList } from './UsersList';

const rootElement = document.getElementById('app')!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <>
      <div className="grid grid-cols-3 col-span-4 gap-x-4">
        <UsersList
          header="User Preview"
          viewFn={(user) => <UsersList.UserPreview {...user} />}
        />
        <UsersList
          header="Users with friends"
          viewFn={(user) => <UsersList.UserFriends {...user} />}
        />
        <UsersList
          header="Detailed list"
          viewFn={(user) => <UsersList.DetailedUser {...user} />}
        />
        <UsersList
          header="No view function"
          viewFn={(user) => <p>Hello {user.firstName}</p>}
        />
      </div>
    </>
  );
}
