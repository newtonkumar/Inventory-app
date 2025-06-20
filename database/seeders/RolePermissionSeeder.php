<?php

namespace  Database\Seeders;

use Illuminate\Database\Seeder;
//use Spatie\Permission\Models\Role;
//use Spatie\Permission\Models\Permission;
use App\Models\User;
use App\Models\Role;
use App\Models\Permission;

class RolePermissionSeeder extends Seeder
{
    public function run(): void
    {
        // Clear cache
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        $permissions = [
            'module' => [
                'access-products-module',
                'access-categories-module',
                'access-permissions-module',
                'access-roles-module',
                'access-users-module',
            ],
            'user' => [
                'create-user',
                'edit-user',
                'delete-user',
                'view-user',
            ],
            'permission' => [
                'view-permission',
                'edit-permission',
                'delete-permission',
                'create-permission',
            ],
            'role' => [
                'view-role',
                'edit-role',
                'delete-role',
                'create-role',
            ],
            'product' => [
                'create-product',
                'edit-product',
                'delete-product',
                'view-product',
            ],
            'category' => [
                'create-category',
                'edit-category',
                'delete-category',
                'view-category',
            ]
        ];

        foreach ($permissions as $module => $permissionList) {
            foreach ($permissionList as $permission) {
                Permission::firstOrCreate([
                    'name' => $permission,
                    'module' => $module,
                    'label' => $permission,
                    'description' => $module . "/" . $permission
                ]);
            }
        }

        //Create roles and assign permissions
        $adminRole = Role::firstOrCreate([
            'name' => 'admin',
            'label' => 'admin',
            'description' => 'admin with all permissions'
        ]);
        $adminRole->syncPermissions(Permission::all());

        $editorRole = Role::firstOrCreate([
            'name' => 'editor',
            'label' => 'editor',
            'description' => 'editor with edit products/category permissions']);
        $editorRole->syncPermissions([
            'create-product',
            'edit-product',
            'view-product',
            'create-category',
            'edit-category',
            'view-category',
        ]);

        //Create users and assign roles
        $admin = User::firstOrCreate(
            ['email' => 'admin@app.com'],
            [
                'name' => 'Admin User',
                'password' => bcrypt('Password@1'),
            ]
        );
        $admin->assignRole($adminRole);

        $editor = User::firstOrCreate(
            ['email' => 'editor@app.com'],
            [
                'name' => 'Editor User',
                'password' => bcrypt('Password@1'),
            ]
        );
        $editor->assignRole($editorRole);
    }
}
