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

  static newAndGetPromise(promise) {
    const result = new Loadable(promise);
    if (result.state.status !== 'pending') {
      throw new Error('Unreachable');
    }
    return [result, result.state.promise];
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
