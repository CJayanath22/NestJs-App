export declare class UsersController {
    searchUsers(): string;
    getUserById(userId: string): string;
    createUser(user: object): object;
    updateUser(updatedUser: object): {
        updatedUser: object;
    };
    deleteUser(userId: string): string;
}
