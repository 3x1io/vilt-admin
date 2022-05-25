<?php namespace Tests\Repositories;

use App\Models\Customer;
use App\Repositories\CustomerRepository;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Tests\TestCase;
use Tests\ApiTestTrait;

class CustomerRepositoryTest extends TestCase
{
    use ApiTestTrait, DatabaseTransactions;

    /**
     * @var CustomerRepository
     */
    protected $customerRepo;

    public function setUp() : void
    {
        parent::setUp();
        $this->customerRepo = \App::make(CustomerRepository::class);
    }

    /**
     * @test create
     */
    public function test_create_customer()
    {
        $customer = Customer::factory()->make()->toArray();

        $createdCustomer = $this->customerRepo->create($customer);

        $createdCustomer = $createdCustomer->toArray();
        $this->assertArrayHasKey('id', $createdCustomer);
        $this->assertNotNull($createdCustomer['id'], 'Created Customer must have id specified');
        $this->assertNotNull(Customer::find($createdCustomer['id']), 'Customer with given id must be in DB');
        $this->assertModelData($customer, $createdCustomer);
    }

    /**
     * @test read
     */
    public function test_read_customer()
    {
        $customer = Customer::factory()->create();

        $dbCustomer = $this->customerRepo->find($customer->id);

        $dbCustomer = $dbCustomer->toArray();
        $this->assertModelData($customer->toArray(), $dbCustomer);
    }

    /**
     * @test update
     */
    public function test_update_customer()
    {
        $customer = Customer::factory()->create();
        $fakeCustomer = Customer::factory()->make()->toArray();

        $updatedCustomer = $this->customerRepo->update($fakeCustomer, $customer->id);

        $this->assertModelData($fakeCustomer, $updatedCustomer->toArray());
        $dbCustomer = $this->customerRepo->find($customer->id);
        $this->assertModelData($fakeCustomer, $dbCustomer->toArray());
    }

    /**
     * @test delete
     */
    public function test_delete_customer()
    {
        $customer = Customer::factory()->create();

        $resp = $this->customerRepo->delete($customer->id);

        $this->assertTrue($resp);
        $this->assertNull(Customer::find($customer->id), 'Customer should not exist in DB');
    }
}
