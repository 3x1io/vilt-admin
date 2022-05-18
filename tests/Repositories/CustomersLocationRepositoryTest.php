<?php namespace Tests\Repositories;

use App\Models\CustomersLocation;
use App\Repositories\CustomersLocationRepository;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Tests\TestCase;
use Tests\ApiTestTrait;

class CustomersLocationRepositoryTest extends TestCase
{
    use ApiTestTrait, DatabaseTransactions;

    /**
     * @var CustomersLocationRepository
     */
    protected $customersLocationRepo;

    public function setUp() : void
    {
        parent::setUp();
        $this->customersLocationRepo = \App::make(CustomersLocationRepository::class);
    }

    /**
     * @test create
     */
    public function test_create_customers_location()
    {
        $customersLocation = CustomersLocation::factory()->make()->toArray();

        $createdCustomersLocation = $this->customersLocationRepo->create($customersLocation);

        $createdCustomersLocation = $createdCustomersLocation->toArray();
        $this->assertArrayHasKey('id', $createdCustomersLocation);
        $this->assertNotNull($createdCustomersLocation['id'], 'Created CustomersLocation must have id specified');
        $this->assertNotNull(CustomersLocation::find($createdCustomersLocation['id']), 'CustomersLocation with given id must be in DB');
        $this->assertModelData($customersLocation, $createdCustomersLocation);
    }

    /**
     * @test read
     */
    public function test_read_customers_location()
    {
        $customersLocation = CustomersLocation::factory()->create();

        $dbCustomersLocation = $this->customersLocationRepo->find($customersLocation->id);

        $dbCustomersLocation = $dbCustomersLocation->toArray();
        $this->assertModelData($customersLocation->toArray(), $dbCustomersLocation);
    }

    /**
     * @test update
     */
    public function test_update_customers_location()
    {
        $customersLocation = CustomersLocation::factory()->create();
        $fakeCustomersLocation = CustomersLocation::factory()->make()->toArray();

        $updatedCustomersLocation = $this->customersLocationRepo->update($fakeCustomersLocation, $customersLocation->id);

        $this->assertModelData($fakeCustomersLocation, $updatedCustomersLocation->toArray());
        $dbCustomersLocation = $this->customersLocationRepo->find($customersLocation->id);
        $this->assertModelData($fakeCustomersLocation, $dbCustomersLocation->toArray());
    }

    /**
     * @test delete
     */
    public function test_delete_customers_location()
    {
        $customersLocation = CustomersLocation::factory()->create();

        $resp = $this->customersLocationRepo->delete($customersLocation->id);

        $this->assertTrue($resp);
        $this->assertNull(CustomersLocation::find($customersLocation->id), 'CustomersLocation should not exist in DB');
    }
}
