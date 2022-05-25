<?php namespace Tests\Repositories;

use App\Models\Group;
use App\Repositories\GroupRepository;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Tests\TestCase;
use Tests\ApiTestTrait;

class GroupRepositoryTest extends TestCase
{
    use ApiTestTrait, DatabaseTransactions;

    /**
     * @var GroupRepository
     */
    protected $groupRepo;

    public function setUp() : void
    {
        parent::setUp();
        $this->groupRepo = \App::make(GroupRepository::class);
    }

    /**
     * @test create
     */
    public function test_create_group()
    {
        $group = Group::factory()->make()->toArray();

        $createdGroup = $this->groupRepo->create($group);

        $createdGroup = $createdGroup->toArray();
        $this->assertArrayHasKey('id', $createdGroup);
        $this->assertNotNull($createdGroup['id'], 'Created Group must have id specified');
        $this->assertNotNull(Group::find($createdGroup['id']), 'Group with given id must be in DB');
        $this->assertModelData($group, $createdGroup);
    }

    /**
     * @test read
     */
    public function test_read_group()
    {
        $group = Group::factory()->create();

        $dbGroup = $this->groupRepo->find($group->id);

        $dbGroup = $dbGroup->toArray();
        $this->assertModelData($group->toArray(), $dbGroup);
    }

    /**
     * @test update
     */
    public function test_update_group()
    {
        $group = Group::factory()->create();
        $fakeGroup = Group::factory()->make()->toArray();

        $updatedGroup = $this->groupRepo->update($fakeGroup, $group->id);

        $this->assertModelData($fakeGroup, $updatedGroup->toArray());
        $dbGroup = $this->groupRepo->find($group->id);
        $this->assertModelData($fakeGroup, $dbGroup->toArray());
    }

    /**
     * @test delete
     */
    public function test_delete_group()
    {
        $group = Group::factory()->create();

        $resp = $this->groupRepo->delete($group->id);

        $this->assertTrue($resp);
        $this->assertNull(Group::find($group->id), 'Group should not exist in DB');
    }
}
