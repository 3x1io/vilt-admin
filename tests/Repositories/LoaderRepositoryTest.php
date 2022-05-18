<?php namespace Tests\Repositories;

use App\Models\Loader;
use App\Repositories\LoaderRepository;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Tests\TestCase;
use Tests\ApiTestTrait;

class LoaderRepositoryTest extends TestCase
{
    use ApiTestTrait, DatabaseTransactions;

    /**
     * @var LoaderRepository
     */
    protected $loaderRepo;

    public function setUp() : void
    {
        parent::setUp();
        $this->loaderRepo = \App::make(LoaderRepository::class);
    }

    /**
     * @test create
     */
    public function test_create_loader()
    {
        $loader = Loader::factory()->make()->toArray();

        $createdLoader = $this->loaderRepo->create($loader);

        $createdLoader = $createdLoader->toArray();
        $this->assertArrayHasKey('id', $createdLoader);
        $this->assertNotNull($createdLoader['id'], 'Created Loader must have id specified');
        $this->assertNotNull(Loader::find($createdLoader['id']), 'Loader with given id must be in DB');
        $this->assertModelData($loader, $createdLoader);
    }

    /**
     * @test read
     */
    public function test_read_loader()
    {
        $loader = Loader::factory()->create();

        $dbLoader = $this->loaderRepo->find($loader->id);

        $dbLoader = $dbLoader->toArray();
        $this->assertModelData($loader->toArray(), $dbLoader);
    }

    /**
     * @test update
     */
    public function test_update_loader()
    {
        $loader = Loader::factory()->create();
        $fakeLoader = Loader::factory()->make()->toArray();

        $updatedLoader = $this->loaderRepo->update($fakeLoader, $loader->id);

        $this->assertModelData($fakeLoader, $updatedLoader->toArray());
        $dbLoader = $this->loaderRepo->find($loader->id);
        $this->assertModelData($fakeLoader, $dbLoader->toArray());
    }

    /**
     * @test delete
     */
    public function test_delete_loader()
    {
        $loader = Loader::factory()->create();

        $resp = $this->loaderRepo->delete($loader->id);

        $this->assertTrue($resp);
        $this->assertNull(Loader::find($loader->id), 'Loader should not exist in DB');
    }
}
