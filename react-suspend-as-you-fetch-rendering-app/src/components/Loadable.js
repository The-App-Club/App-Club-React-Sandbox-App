class Loadable {
  constructor(promise) {
    this.state = {
      status: 'pending',
      promise: promise.then(
        (data) => {
          this.state = {
            status: 'fulfilled',
            data,
          };
          return data;
        },
        (error) => {
          this.state = {
            status: 'rejected',
            error,
          };
          throw error;
        }
      ),
    };
  }
  getOrThrow() {
    switch (this.state.status) {
      case 'pending':
        throw this.state.promise;
      case 'fulfilled':
        return this.state.data;
      case 'rejected':
        throw this.state.error;
    }
  }
}

export { Loadable };
