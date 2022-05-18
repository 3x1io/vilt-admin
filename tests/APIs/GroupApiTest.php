<?php namespace Tests\APIs;

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Tests\TestCase;
use Tests\ApiTestTrait;
use App\Models\Group;

class GroupApiTest extends TestCase
{
    use ApiTestTrait, WithoutMiddleware, DatabaseTransactions;

    /**
     * @test
     */
    public function test_create_group()
    {
        $group = Group::factory()->make()->toArray();

        $this->response = $this->json(
            'POST',
            '/api/groups', $group
        );

        $this->assertApiResponse($group);
    }

    /**
     * @test
     */
    public function test_read_group()
    {
        $group = Group::factory()->create();

        $this->response = $this->json(
            'GET',
            '/api/groups/'.$group->id
        );

        $this->assertApiResponse($group->toArray());
    }

    /**
     * @test
     */
    public function test_update_group()
    {
        $group = Group::factory()->create();
        $editedGroup = Group::factory()->make()->toArray();

        $this->response = $this->json(
            'PUT',
            '/api/groups/'.$group->id,
            $editedGroup
        );

        $this->assertApiResponse($editedGroup);
    }

    /**
     * @test
     */
    public function test_delete_group()
    {
        $group = Group::factory()->create();

        $this->response = $this->json(
            'DELETE',
             '/api/groups/'.$group->id
         );

        $this->assertApiSuccess();
        $this->response = $this->json(
            'GET',
            '/api/groups/'.$group->id
        );

        $this->response->assertStatus(404);
    }
}
