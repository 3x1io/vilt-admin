<?php namespace Tests\APIs;

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Tests\TestCase;
use Tests\ApiTestTrait;
use App\Models\CustomersLocation;

class CustomersLocationApiTest extends TestCase
{
    use ApiTestTrait, WithoutMiddleware, DatabaseTransactions;

    /**
     * @test
     */
    public function test_create_customers_location()
    {
        $customersLocation = CustomersLocation::factory()->make()->toArray();

        $this->response = $this->json(
            'POST',
            '/api/customers_locations', $customersLocation
        );

        $this->assertApiResponse($customersLocation);
    }

    /**
     * @test
     */
    public function test_read_customers_location()
    {
        $customersLocation = CustomersLocation::factory()->create();

        $this->response = $this->json(
            'GET',
            '/api/customers_locations/'.$customersLocation->id
        );

        $this->assertApiResponse($customersLocation->toArray());
    }

    /**
     * @test
     */
    public function test_update_customers_location()
    {
        $customersLocation = CustomersLocation::factory()->create();
        $editedCustomersLocation = CustomersLocation::factory()->make()->toArray();

        $this->response = $this->json(
            'PUT',
            '/api/customers_locations/'.$customersLocation->id,
            $editedCustomersLocation
        );

        $this->assertApiResponse($editedCustomersLocation);
    }

    /**
     * @test
     */
    public function test_delete_customers_location()
    {
        $customersLocation = CustomersLocation::factory()->create();

        $this->response = $this->json(
            'DELETE',
             '/api/customers_locations/'.$customersLocation->id
         );

        $this->assertApiSuccess();
        $this->response = $this->json(
            'GET',
            '/api/customers_locations/'.$customersLocation->id
        );

        $this->response->assertStatus(404);
    }
}
