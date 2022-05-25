<?php namespace Tests\APIs;

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Tests\TestCase;
use Tests\ApiTestTrait;
use App\Models\Loader;

class LoaderApiTest extends TestCase
{
    use ApiTestTrait, WithoutMiddleware, DatabaseTransactions;

    /**
     * @test
     */
    public function test_create_loader()
    {
        $loader = Loader::factory()->make()->toArray();

        $this->response = $this->json(
            'POST',
            '/api/loaders', $loader
        );

        $this->assertApiResponse($loader);
    }

    /**
     * @test
     */
    public function test_read_loader()
    {
        $loader = Loader::factory()->create();

        $this->response = $this->json(
            'GET',
            '/api/loaders/'.$loader->id
        );

        $this->assertApiResponse($loader->toArray());
    }

    /**
     * @test
     */
    public function test_update_loader()
    {
        $loader = Loader::factory()->create();
        $editedLoader = Loader::factory()->make()->toArray();

        $this->response = $this->json(
            'PUT',
            '/api/loaders/'.$loader->id,
            $editedLoader
        );

        $this->assertApiResponse($editedLoader);
    }

    /**
     * @test
     */
    public function test_delete_loader()
    {
        $loader = Loader::factory()->create();

        $this->response = $this->json(
            'DELETE',
             '/api/loaders/'.$loader->id
         );

        $this->assertApiSuccess();
        $this->response = $this->json(
            'GET',
            '/api/loaders/'.$loader->id
        );

        $this->response->assertStatus(404);
    }
}
