<?php namespace Tests\Repositories;

use App\Models\Driver;
use App\Repositories\DriverRepository;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Tests\TestCase;
use Tests\ApiTestTrait;

class DriverRepositoryTest extends TestCase
{
    use ApiTestTrait, DatabaseTransactions;

    /**
     * @var DriverRepository
     */
    protected $driverRepo;

    public function setUp() : void
    {
        parent::setUp();
        $this->driverRepo = \App::make(DriverRepository::class);
    }

    /**
     * @test create
     */
    public function test_create_driver()
    {
        $driver = Driver::factory()->make()->toArray();

        $createdDriver = $this->driverRepo->create($driver);

        $createdDriver = $createdDriver->toArray();
        $this->assertArrayHasKey('id', $createdDriver);
        $this->assertNotNull($createdDriver['id'], 'Created Driver must have id specified');
        $this->assertNotNull(Driver::find($createdDriver['id']), 'Driver with given id must be in DB');
        $this->assertModelData($driver, $createdDriver);
    }

    /**
     * @test read
     */
    public function test_read_driver()
    {
        $driver = Driver::factory()->create();

        $dbDriver = $this->driverRepo->find($driver->id);

        $dbDriver = $dbDriver->toArray();
        $this->assertModelData($driver->toArray(), $dbDriver);
    }

    /**
     * @test update
     */
    public function test_update_driver()
    {
        $driver = Driver::factory()->create();
        $fakeDriver = Driver::factory()->make()->toArray();

        $updatedDriver = $this->driverRepo->update($fakeDriver, $driver->id);

        $this->assertModelData($fakeDriver, $updatedDriver->toArray());
        $dbDriver = $this->driverRepo->find($driver->id);
        $this->assertModelData($fakeDriver, $dbDriver->toArray());
    }

    /**
     * @test delete
     */
    public function test_delete_driver()
    {
        $driver = Driver::factory()->create();

        $resp = $this->driverRepo->delete($driver->id);

        $this->assertTrue($resp);
        $this->assertNull(Driver::find($driver->id), 'Driver should not exist in DB');
    }
}
