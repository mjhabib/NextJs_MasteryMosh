import middleware from 'next-auth/middleware';
// we could also import/export this function in one go like this:
// export {default} from 'next-auth/middleware';

export default middleware;

// protected pages by AuthJs
export const config = {
  // * = zero or more
  // + = one or more
  // ? = zero or one
  matcher: ['/dashboard'],
};

// there is currently an error here, I'm gonna deal with it later!
