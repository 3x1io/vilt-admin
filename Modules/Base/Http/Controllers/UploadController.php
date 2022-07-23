<?php

namespace Modules\Base\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class UploadController extends Controller
{
    public function index(Request $request)
    {
        $rules = [
            'file' => 'required',
        ];

        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            return  response()->json([
                "success" => false,
                "message" =>  $validator->errors()
            ], 422);
        } else {
            $uploadedFile = $request->file('file');
            $filename = UploadController . phptime();

            $filePath = Storage::disk('public')->putFileAs(
                'files/',
                $uploadedFile,
                $filename
            );

            return back()->with('flash', [
                'message' => "File Has Been Uploaded Success",
                "file" => storage_path('app/public/files/' . $filename)
            ]);
        }
    }

    public function remove(Request $request)
    {
        $rules = [
            'path' => 'required',
        ];

        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            return  response()->json([
                "success" => false,
                "message" =>  $validator->errors()
            ], 422);
        } else {
            return $request->get('path');
            $check = File::exist($request->get('path'));
            if ($check) {
                File::delete($request->get('path'));
            }
            return back();
        }
    }
}
